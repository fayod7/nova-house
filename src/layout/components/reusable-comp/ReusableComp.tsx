import { memo, type FC } from 'react';


interface Props {
    title: string
}

const ReusableComp:FC<Props> = (props) => {
    const { title } = props
  return (
         <div
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1500')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="max-w-2xl mx-auto text-lg">
          </p>
        </div>
      </div>
  );
};

export default memo(ReusableComp);