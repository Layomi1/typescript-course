// UNKNOWN type is used with functions. they force conditional checks  to done on the function because the values that returned frm the function are not yet determined. eg.
function process(val: unknown) {
  if (
    typeof val === "object" &&
    !!val &&
    "log" in val &&
    typeof val.log === "function"
  ) {
    val.log();
  }
}
process({ key: "pair" });
