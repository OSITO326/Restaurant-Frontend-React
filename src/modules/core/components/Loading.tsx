interface LoadingProps {
  isLoading: boolean | undefined;
  message: string;
}

export const Loading = ({ isLoading, message }: LoadingProps) => {
  if (isLoading) {
    return (
      <div className='container flex items-center justify-center'>
        <p>{message}</p>
      </div>
    );
  }
  return null;
};
