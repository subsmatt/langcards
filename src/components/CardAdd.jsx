import withAuth from "./withAuth";

function CardAdd({insertRecord, loggedInUser}){
    if (!loggedInUser || loggedInUser.length === 0) return null;

    return(
        <a href="#" className="">
            <i onClick={(e) => {
                e.preventDefault();
                const word = window.prompt("Enter spanish word:", "");
                const desc = window.prompt("Enter description", "");
                insertRecord({
                    id: "1110",
                    lang: "es",
                    word: word,
                    desc_lang: "en",
                    desc: desc,
                    tags: ["food"],
                    type: "noun",
                    hits: 0,
                    examples: [],
                    familiar: false,
                    iknowthis: false,
                });
            }}>
                + Add
            </i>
        </a>
    );
}

export default withAuth(CardAdd);