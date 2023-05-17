import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getDatabase, set, ref, onValue, push } from "firebase/database";
import app from "./FirebaseConfig";

const auth = getAuth(app);
const database = getDatabase(app);


let signUpUser = (obj) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then(res => {
                obj.id = res.user.uid
                const reference = ref(database, `users/${obj.id}`)
                set(reference, obj)
            }).then(() => {
                alert("You SignUp Successuly")
            }).catch((err) => reject(err.message))
    });
};
let loginUser = (obj) => {

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then(res => {
                resolve(res.user.uid)
            }).catch(err => reject(err.message))
    })
};

let signoutUser = () => {
    return new Promise((resolve, reject) => {
        signOut(auth).then(res => console.log(res))
            .catch(err => console.log(err))
    })

};

let postfbdata = (obj, node) => {

    return new Promise((resolve, reject) => {
        let keyrefr = ref(database, `${node}/`);
        obj.id = push(keyrefr).key;
        let objRefre = ref(database, `${node}/${obj.id}`)
        let dataref = ref(database, `${node}`)
        set(objRefre, obj).then((res) => {
            resolve(res)          
        }).catch((err) => reject(err.message))

    })
};
let editData = (obj, node, id) => {
    return new Promise((resolve, reject) => {
        let objRefre = ref(database, `${node}/${id}`)
        set(objRefre, obj).then((res) => {
            alert("Your Changing is Save")
        }).catch((err) => reject(err.message))
    })
};


let fbEdit = () => { };
let fbDelete = () => { };
let fbGet = () => { };
export {
    postfbdata,
    editData,
    signUpUser,
    loginUser,
    signoutUser,
    fbGet,    
    fbEdit,
    fbDelete,
};