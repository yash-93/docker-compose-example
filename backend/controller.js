const getCurrentDate = (req, res, next) => {
  let currentDate;
  currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  currentDate = `${date}-${month}-${year}`;
  res.json({
    'date': currentDate
  });
}

exports.getCurrentDate = getCurrentDate;