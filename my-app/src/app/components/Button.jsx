import Link from "next/link";

export default function Button(props){
    return  <Link href="/">
            <button onClick={props.onClick} type="submit" className="font-mono absolute right-150 top-185 
                    cursor-pointer font-bold mx-auto block border rounded-lg px-7 py-2 text-3xl">Post
            </button>
            </Link>
}