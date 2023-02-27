// "Buffer" 대신 별도로 선언하여 구조적 타이핑 적용
type CSVBuffer = {
  toString: (encoding: string) => string;
};

type ParseCSVHanlder = (
  contents: string | CSVBuffer
) => { [column: string]: string }[];

const parseCSV: ParseCSVHanlder = (contents) => {
  if (typeof contents === "object") {
    return parseCSV(contents.toString("utf-8"));
  }

  return [{ column: contents }];
};
