export default function Button(props){
    return  <>
            <button onClick={props.onClick} type={props.submit} className={props.className}>{props.label}
            </button>
            </>
}