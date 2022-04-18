import { from, Observable } from "rxjs";

const photos = from(fetch('http://jsonplaceholder.typicode.com/photos'));

photos.subscribe({
    next(response) {
        console.log(response);
    },
    error(error) {
        console.log(error);
    },
    complete() {
        console.log('done');
    }
});