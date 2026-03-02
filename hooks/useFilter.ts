'use client';
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
  } = options;

  const [filterState, setFilterState] = useState<FilterState>({
    searchTerm: initialSearch,
    page: initialPage,
    limit: initialLimit,
    filters: initialFilters,
  });

  const setSearchTerm = useCallback((term: string) => {
    setFilterState(prev => ({
      ...prev,
      searchTerm: term,
      page: resetPageOnFilterChange ? 1 : prev.page,
    }));
  }, [resetPageOnFilterChange]);

  const setPage = useCallback((page: number) => {
    setFilterState(prev => ({ ...prev, page }));
  }, []);

  const setLimit = useCallback((limit: number) => {
    setFilterState(prev => ({ 
      ...prev, 
      limit, 
      page: 1 // Reset to first page when changing limit
    }));
  }, []);

  const setFilter = useCallback((key: string, value: any) => {
    setFilterState(prev => ({
      ...prev,
      filters: { ...prev.filters, [key]: value },
      page: resetPageOnFilterChange ? 1 : prev.page,
    }));
  }, [resetPageOnFilterChange]);

  const removeFilter = useCallback((key: string) => {
    setFilterState(prev => {
      const newFilters = { ...prev.filters };
      delete newFilters[key];
      return {
        ...prev,
        filters: newFilters,
        page: resetPageOnFilterChange ? 1 : prev.page,
      };
    });
  }, [resetPageOnFilterChange]);

  const setMultipleFilters = useCallback((filters: Record<string, any>) => {
    setFilterState(prev => ({
      ...prev,
      filters: { ...prev.filters, ...filters },
      page: resetPageOnFilterChange ? 1 : prev.page,
    }));
  }, [resetPageOnFilterChange]);

  const clearAllFilters = useCallback(() => {
    setFilterState(prev => ({
      ...prev,
      filters: {},
      page: resetPageOnFilterChange ? 1 : prev.page,
    }));
  }, [resetPageOnFilterChange]);

  const resetFilters = useCallback(() => {
    setFilterState({
      searchTerm: initialSearch,
      page: initialPage,
      limit: initialLimit,
      filters: initialFilters,
    });
  }, [initialPage, initialLimit, initialSearch, initialFilters]);

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
