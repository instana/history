import expect from "expect";
import execSteps from "./execSteps";

export default (history, done) => {
   const steps = [
     () => {
       expect(() => {
         history.push("/hello%");
     }).not.toThrow(
         'Pathname "/hello%" could not be decoded. This is likely caused by an invalid percent-encoding.'
       );
     },
     location => {
       expect(location).toMatchObject({
         pathname: "/hello%"
       });
     }
   ];

  execSteps(steps, history, done);
};
