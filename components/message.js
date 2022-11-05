export default function Message({ children, avatar, username, description }) {
    return (
      <div className="bg-zinc-300 p-8 border-b-2 rounded-lg my-4 w-full">
        <div className="flex items-center gap-4">
          <img src={avatar} className="w-10 rounded-full border-2 border-white" />
          <h2 className="font-bold">{username}</h2>
        </div>
        <div className="py-4">
          <p>{description}</p>
        </div>
        {children}
      </div>
    );
  }