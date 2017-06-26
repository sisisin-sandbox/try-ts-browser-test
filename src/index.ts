import { fn } from './mod';
function main() {
    console.log(fn());
    const reqTag = document.createElement('script');
    reqTag.src = 'http://localhost:8181/req';
    document.body.appendChild(reqTag);
}
main();
