import React from "react";
import Card from "../components/diary/Card";
import { getCardData } from "../lib/api";
import { withRouter } from "react-router-dom";

const Diary = ({ year, month, match }) => {
  const id = match.params.id;
  const [diaryData, setDiaryData] = React.useState(null);
  const [rawData, setRawData] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const data = await getCardData();
      data[year] &&
        setDiaryData(data[year][month].find((el) => el.id === parseInt(id)));
      setRawData(data);
    })();
  }, [id]);

  return (
    diaryData && (
      <Card
        data={diaryData}
        setRawData={setRawData}
        rawData={rawData}
        year={year}
        month={month}
      />
    )
  );
};

export default withRouter(Diary);
