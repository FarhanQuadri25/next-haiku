"use client";

import { useActionState, useState } from "react";
import { createHaiku, editHaiku } from "../actions/haikuController";
import { CldUploadWidget } from "next-cloudinary";

export default function HaikuForm(props) {
  const [signature, setSignature] = useState("");
  const [public_id, setPublic_id] = useState("");
  const [version, setVersion] = useState("");

  let actualAction;
  if (props.action === "create") {
    actualAction = createHaiku;
  }
  if (props.action === "edit") {
    actualAction = editHaiku;
  }
  const [formState, formAction] = useActionState(actualAction, {});

  return (
    <form
      action={formAction}
      className="max-w-xl mx-auto sm:p-8 md:p-[8rem] space-y-4"
    >
      <div className="mb-3">
        <input
          type="text"
          name="line1"
          defaultValue={props.haiku?.line1}
          placeholder="line #1"
          id="line1"
          className="input input-bordered  font-bold w-full mt-2 text-lg max-w-xs ring-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {formState.errors?.line1 && (
          <div role="alert" className="alert alert-error mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{formState.errors?.line1}</span>
          </div>
        )}
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="line2"
          defaultValue={props.haiku?.line2}
          placeholder="line #2"
          id="line2"
          className="input input-bordered font-bold w-full mt-2 text-lg max-w-xs ring-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {formState.errors?.line2 && (
          <div role="alert" className="alert alert-error mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{formState.errors?.line2}</span>
          </div>
        )}
      </div>
      <div className="mb-3">
        <input
          type="text"
          name="line3"
          defaultValue={props.haiku?.line3}
          placeholder="line #3"
          id="line3"
          className="input input-bordered font-bold w-full mt-2 text-lg max-w-xs ring-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {formState.errors?.line3 && (
          <div role="alert" className="alert alert-error mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>{formState.errors?.line3}</span>
          </div>
        )}
      </div>
      <div className="mb-4">
        <CldUploadWidget
          onSuccess={(result, { widget }) => {
            setSignature(result?.info.signature);
            setPublic_id(result?.info.public_id);
            setVersion(result?.info.version);
          }}
          onQueuesEnd={(result, { widget }) => widget.close()}
          signatureEndpoint="/widget-signature"
        >
          {({ open }) => {
            function handleClick(e) {
              e.preventDefault();
              open();
            }
            return (
              <button
                onClick={handleClick}
                className="btn btn-ghost bg-indigo-700"
              >
                Upload an Image
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
      <input type="hidden" name="public_id" value={public_id} />
      <input type="hidden" name="version" value={version} />
      <input type="hidden" name="signature" value={signature} />
      <input
        type="hidden"
        name="haikuId"
        defaultValue={props.haiku?._id.toString()}
      />
      <button className="btn btn-accent  max-w-xs">Submit</button>
    </form>
  );
}
