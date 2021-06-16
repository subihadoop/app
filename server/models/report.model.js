module.exports = (sequelize, Sequelize) => {
  const report = sequelize.define("report", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    status: {
      type: Sequelize.STRING
    }
  });

  return report;
};
//Total count daily yesterday and weekly
// module.exports = (sequelize, Sequelize) => {
//  const reportCount = sequelize.define("reportcount", {
//     totaljabstoday: {
//       type: Sequelize.INTEGER
//     },
//     totaljobyestarday: {
//       type: Sequelize.INTEGER
//     },
//     totaljobweek: {
//       type: Sequelize.INTEGER
//     },
//     Totaljobinprogress: {
//       type: Sequelize.INTEGER
//     },
//     totaljobinpyestarday: {
//       type: Sequelize.INTEGER
//     },
//     totaljobinpweek: {
//       type: Sequelize.INTEGER
//     },
//     Totalfailjob: {
//       type: Sequelize.INTEGER
//     },
//     totaljobfailyesterday: {
//       type: Sequelize.INTEGER
//     },
//        totaljobfailweek: {
//       type: Sequelize.INTEGER
//     },

//   });

//   return reportCount;
// };
