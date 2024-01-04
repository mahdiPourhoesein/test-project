import { FunctionComponent } from "react";

interface IUploadFile {
  setFieldValue: any
}

const UploadFile: FunctionComponent<IUploadFile> = ({
  setFieldValue,
}) => {
  return (
    <label htmlFor="image" className="absolute w-full h-full top-[-100%] left-0">
      <input
        type="file"
        name="image"
        id="image"
        // set supported file types here,
        // could also check again within formik validation or backend
        accept="image/png, .svg"
        onChange={(e) => {
          // Object is possibly null error w/o check
          if (e.currentTarget.files) {
            setFieldValue("image", e.currentTarget.files[0]);
          }
        }}
      />
    </label>
  );
};

export default UploadFile;
