export default function Input(props){
    return  <><h1 className="text-3xl mb-4 font-bold">{props.label}</h1>
                <input onChange={props.onChange} className={props.className}
                    type={props.type} placeholder={props.placeholder} required></input>
            </>
}