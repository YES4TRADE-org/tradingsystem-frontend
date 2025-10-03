export default function Input(props){
    return  <><h1 className={props.titleClassName}>{props.label}</h1>
                <input onChange={props.onChange} className={props.inputClassName}
                    type={props.type} placeholder={props.placeholder} required></input>
            </>
}