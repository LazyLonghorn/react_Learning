import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const About = () => {
    const query = useQuery();
    const showDetail = query.get('detail') === 'true';

    return (
        <div>
            <h1>About</h1>
            <p>{showDetail && 'Hidden Page'}</p>
        </div>
    );
};

export default About;