import Header from "./Header";
import Footer from "./Footer";

const UserSettings = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="flex w-1/2">
          <label>Change username:</label>
          <br />
          <input
            type="text"
            placeholder="New username"
            className="input input-bordered input-primary w-full max-w-xs "
          />
          <br />
          <input
            type="email"
            placeholder="New E-mail"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <br />
          <input
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserSettings;
