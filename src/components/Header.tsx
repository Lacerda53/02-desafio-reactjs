interface props{
    title: string
}

export default function Header(props: props) {
    return (
        <header>
        <span className="category">Categoria:<span> {props.title}</span></span>
      </header>
    )
}
