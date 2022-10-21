import { useState } from "react";

function useSpeakerFilter(startingShowDesc) {
    const [showDesc, setShowDesc] = useState(startingShowDesc);
    const [searchQuery, setSearchQuery] = useState("");

    const WORD_CATEGORY = [
        "CAT1",
        "CAT2"
    ];

    return {
        showDesc,
        setShowDesc,
        searchQuery,
        setSearchQuery,
        WORD_CATEGORY
    };
}

export default useToolbarFilter;