interface Props {
  title: string;
  description: string;
}

export const TitlePage = ({ title, description }: Props) => {
  return (
    <header className='categories__header'>
      <div className='container'>
        <h1 className='text-3xl'>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
};
