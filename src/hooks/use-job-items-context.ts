import { JobItemsContext } from '@/contexts/job-items-context-provider';
import { useContext } from 'react';

export const useJobItemsContext = () => {
  const context = useContext(JobItemsContext);
  if (!context) {
    throw new Error('useJobItemsContext must be used within a JobItemsContextProvider');
  }
  return context;
};
