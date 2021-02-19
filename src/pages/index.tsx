type Props = {
  title: string
};

export default function Home({ title = 'React Avançado' }: Props) {
  return (
    <p>{title}</p>
  )
}
