import React from "react";
import Card from "../components/diary/Card";
import { getCardData } from "../lib/api";
import { withRouter } from "react-router-dom";

const Diary = ({ year, month, match }) => {
  const id = match.params.id - 1;
  const [diaryData, setDiaryData] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const data = await getCardData();
      data[year] && setDiaryData(data[year][month][id]);
    })();
  }, [id]);

  return diaryData && <Card data={diaryData} />;
};

export default withRouter(Diary);
