'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

interface FilterState {
  searchTerm: string;
  page: number;
  limit: number;
  filters: Record<string, any>; // Changed from additionalFilters to filters for clarity
}

interface UseFilterOptions {
  initialPage?: number;
  initialLimit?: number;
  initialSearch?: string;
  initialFilters?: Record<string, any>;
  resetPageOnFilterChange?: boolean;
  syncWithUrl?: boolean; // New option to sync with URL
}

interface UseFilterReturn {
  searchTerm: string;
  page: number;
  limit: number;
  filters: Record<string, any>;
  setSearchTerm: (term: string) => void;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setFilter: (key: string, value: any) => void;
  removeFilter: (key: string) => void;
  setMultipleFilters: (filters: Record<string, any>) => void;
  clearAllFilters: () => void;
  resetFilters: () => void;
  getQueryParams: () => Record<string, any>;
  updateFromMeta: (meta: PaginationMeta) => void;
  hasActiveFilters: () => boolean;
}

export function useFilter(options: UseFilterOptions = {}): UseFilterReturn {
  const {
    initialPage = 1,
    initialLimit = 10,
    initialSearch = '',
    initialFilters = {},
    resetPageOnFilterChange = true,
    syncWithUrl = true, // Default to true for URL sync
  } = options;

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Initialize state from URL params if syncWithUrl is true
  const getInitialState = useCallback(() => {
    if (syncWithUrl && searchParams) {
      const urlPage = Number(searchParams.get('page')) || initialPage;
      const urlLimit = Number(searchParams.get('limit')) || initialLimit;
      const urlSearch = searchParams.get('search') || initialSearch;
      
      const urlFilters: Record<string, any> = {};
      searchParams.forEach((value: string, key: string) => {
        if (key !== 'page' && key !== 'limit' && key !== 'search') {
          urlFilters[key] = value;
        }
      });

      return {
        searchTerm: urlSearch,
        page: urlPage,
        limit: urlLimit,
        filters: { ...initialFilters, ...urlFilters },
      };
    }

    return {
      searchTerm: initialSearch,
      page: initialPage,
      limit: initialLimit,
      filters: initialFilters,
    };
  }, [syncWithUrl, searchParams, initialPage, initialLimit, initialSearch, initialFilters]);

  const [filterState, setFilterState] = useState<FilterState>(getInitialState);

  // Update URL when filters change
  const updateUrl = useCallback((state: FilterState) => {
    if (!syncWithUrl) return;

    const params = new URLSearchParams();
    
    // Add page and limit
    params.set('page', state.page.toString());
    params.set('limit', state.limit.toString());
    
    // Add search term if exists
    if (state.searchTerm.trim()) {
      params.set('search', state.searchTerm.trim());
    }
    
    // Add all filters
    Object.entries(state.filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        if (Array.isArray(value)) {
          params.set(key, value.join(','));
        } else {
          params.set(key, value.toString());
        }
      }
    });

    // Update URL without page reload
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl, { scroll: false });
  }, [syncWithUrl, pathname, router]);

  const setSearchTerm = useCallback((term: string) => {
    setFilterState(prev => {
      const newState = {
        ...prev,
        searchTerm: term,
        page: resetPageOnFilterChange ? 1 : prev.page,
      };
      updateUrl(newState);
      return newState;
    });
  }, [resetPageOnFilterChange, updateUrl]);

  const setPage = useCallback((page: number) => {
    setFilterState(prev => {
      const newState = { ...prev, page };
      updateUrl(newState);
      return newState;
    });
  }, [updateUrl]);

  const setLimit = useCallback((limit: number) => {
    setFilterState(prev => {
      const newState = { 
        ...prev, 
        limit, 
        page: 1 // Reset to first page when changing limit
      };
      updateUrl(newState);
      return newState;
    });
  }, [updateUrl]);

  const setFilter = useCallback((key: string, value: any) => {
    setFilterState(prev => {
      const newState = {
        ...prev,
        filters: { ...prev.filters, [key]: value },
        page: resetPageOnFilterChange ? 1 : prev.page,
      };
      updateUrl(newState);
      return newState;
    });
  }, [resetPageOnFilterChange, updateUrl]);

  const removeFilter = useCallback((key: string) => {
    setFilterState(prev => {
      const newFilters = { ...prev.filters };
      delete newFilters[key];
      const newState = {
        ...prev,
        filters: newFilters,
        page: resetPageOnFilterChange ? 1 : prev.page,
      };
      updateUrl(newState);
      return newState;
    });
  }, [resetPageOnFilterChange, updateUrl]);

  const setMultipleFilters = useCallback((filters: Record<string, any>) => {
    setFilterState(prev => {
      const newState = {
        ...prev,
        filters: { ...prev.filters, ...filters },
        page: resetPageOnFilterChange ? 1 : prev.page,
      };
      updateUrl(newState);
      return newState;
    });
  }, [resetPageOnFilterChange, updateUrl]);

  const clearAllFilters = useCallback(() => {
    setFilterState(prev => {
      const newState = {
        ...prev,
        filters: {},
        page: resetPageOnFilterChange ? 1 : prev.page,
      };
      updateUrl(newState);
      return newState;
    });
  }, [resetPageOnFilterChange, updateUrl]);

  const resetFilters = useCallback(() => {
    const newState = {
      searchTerm: initialSearch,
      page: initialPage,
      limit: initialLimit,
      filters: initialFilters,
    };
    setFilterState(newState);
    updateUrl(newState);
  }, [initialPage, initialLimit, initialSearch, initialFilters, updateUrl]);

  const getQueryParams = useCallback(() => {
    const params: Record<string, any> = {
      page: filterState.page,
      limit: filterState.limit,
    };

    // Add search term
    if (filterState.searchTerm.trim()) {
      params.search = filterState.searchTerm.trim();
    }

    // Add all filters (status, date, name, select options, etc.)
    Object.entries(filterState.filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== '') {
        params[key] = value;
      }
    });

    return params;
  }, [filterState]);

  const updateFromMeta = useCallback((meta: PaginationMeta) => {
    // Update page if it's different from current page (might happen after API call)
    if (meta.page !== filterState.page) {
      setFilterState(prev => ({ ...prev, page: meta.page }));
    }
  }, [filterState.page]);

  const hasActiveFilters = useCallback(() => {
    return (
      filterState.searchTerm.trim() !== '' ||
      Object.keys(filterState.filters).some(key => {
        const value = filterState.filters[key];
        return value !== undefined && value !== null && value !== '';
      })
    );
  }, [filterState]);

  return {
    searchTerm: filterState.searchTerm,
    page: filterState.page,
    limit: filterState.limit,
    filters: filterState.filters,
    setSearchTerm,
    setPage,
    setLimit,
    setFilter,
    removeFilter,
    setMultipleFilters,
    clearAllFilters,
    resetFilters,
    getQueryParams,
    updateFromMeta,
    hasActiveFilters,
  };
}
