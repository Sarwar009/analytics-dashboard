import { create } from 'zustand';

export type DateRange = '7days' | '30days' | '12months';
export type UserType = 'all' | 'free' | 'premium' | 'enterprise';

interface FilterState {
  dateRange: DateRange;
  userType: UserType;
  setDateRange: (range: DateRange) => void;
  setUserType: (type: UserType) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  dateRange: '12months',
  userType: 'all',
  setDateRange: (range) => set({ dateRange: range }),
  setUserType: (type) => set({ userType: type }),
}));
