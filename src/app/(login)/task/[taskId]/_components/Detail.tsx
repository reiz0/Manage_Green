import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Editor } from "./Editor";


export const Detail = () => {
  return (
    <>
      <CardHeader>
        <CardTitle>Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Editor />
      </CardContent>
    </>
  );
};
