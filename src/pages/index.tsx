type Props = {
  title: string
};

const foo =    "asdasdasd";

export default function Home({ title = 'React Avançado' }: Props) {
  return (
    <p>{title}</p>
  )
}
