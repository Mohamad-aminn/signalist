'use client'
 const SearchLink = () => {
    return (
        <button onClick={() => document.getElementById('search')!.showModal()}>search</button>

    );
};

export default SearchLink;
