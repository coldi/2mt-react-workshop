import { useLocation } from 'react-router-dom';

export default function useSearchParams() {
    const location = useLocation();
    // for some reason `location.search` remains empty,
    // so we parse search query from `location.pathname` instead
    const searchQuery = location.pathname.split('?')[1];
    return new URLSearchParams(searchQuery);
}
