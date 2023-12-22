import { poem} from "../data/data";


const Poem =()=>{
let output=[];
poem.lines.forEach((line,i)=>{

    output.push(
        <hr key={i+ '-seperator'} />
    );

    output.push(
        <p key={i + '-text'}>
            {line}
        </p>
    )
});

output.shift();


    return (
<article>{output}</article>

    )
}

export default Poem;