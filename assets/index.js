

    import {fetchCharacter} from "./modules/fetchCharacter.js";
    import {displayCharacter} from "./modules/displayCharacter.js";
    import {viewCharacter} from "./modules/viewCharacter.js";
    import {createCharacter} from "./modules/createCharacter.js";
    //import {editCharacter} from "./modules/editCharacter.js";
    import {erasedCharacter} from "./modules/deleteCharacter.js";
    //   **** Get api and show elements ****

    /*  **** MAIN ****  */

    let apiChar = fetchCharacter();
    let image = "";
    document.querySelector("#inputImg").addEventListener("change", (event) => {
        const fileList = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            image = reader.result.replace('data:', '').replace(/^.+,/, '');
            console.log(image);
        };
        reader.readAsDataURL(fileList);
    });

    apiChar.then((element) => {
        displayCharacter(element);
        viewCharacter();
        createCharacter(image);
        //editCharacter();
        erasedCharacter(image);
    })
