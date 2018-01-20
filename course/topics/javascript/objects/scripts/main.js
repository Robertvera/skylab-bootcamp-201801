//### is_object
//Write a JavaScript function to check whether an `input` is an object or not.

function isObject (obj) {
    if (typeof obj == 'object' && obj != null ) {
        return true;
    } else {
        return false;
    }
}
