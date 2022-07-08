import winston from "winston";
import winstonDaily from "winston-daily-rotate-file";

/////////////////////////////////////////////////////////////////
// winston -> s3로 로그 기록
/////////////////////////////////////////////////////////////////
const S3StreamLogger = require("s3-streamlogger").S3StreamLogger;
const s3_stream = new S3StreamLogger({
  bucket: process.env.B_NAME, //s3 bucket name ex) "testbucket"
  access_key_id: process.env.A_KEY, //aws access_key
  secret_access_key: process.env.S_KEY, //aws secret_key
});

const transport = new winston.transports.Stream({
  stream: s3_stream,
});

transport.on("error", function (err) {
  console.log("log error");
});
const { combine, timestamp, printf } = winston.format;
const logFormat = printf(info => {
  return `${info.timestamp} ${info.level}: ${info.message}`;
});
export const logger = winston.createLogger({
  format: combine(
    timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    logFormat,
  ),
  transports: [transport],
});

/////////////////////////////////////////////////////////////////

// const logDir = "/Users/juyoungkim/Desktop/joo/nissan/NISSAN_20220706/NISSAN/Logs"; // 로그 파일 저장 경로 설정
// const { combine, timestamp, printf } = winston.format;

// // Define log format
// const logFormat = printf(info => {
//   return `${info.timestamp} ${info.level}: ${info.message}`;
// });

// /*
//  * Log Level
//  * error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
//  */
// export const logger = winston.createLogger({
//   format: combine(
//     timestamp({
//       format: "YYYY-MM-DD HH:mm:ss",
//     }),
//     logFormat,
//   ),
//   transports: [
//     // info 레벨 로그를 저장할 파일 설정
//     new winstonDaily({
//       level: "info",
//       datePattern: "YYYY-MM-DD",
//       dirname: logDir,
//       filename: `%DATE%.log`,
//       maxFiles: 30, // 30일치 로그 파일 저장
//       zippedArchive: true,
//     }),
//     // error 레벨 로그를 저장할 파일 설정
//     new winstonDaily({
//       level: "error",
//       datePattern: "YYYY-MM-DD",
//       dirname: logDir + "/error", // error.log 파일은 error 폴더를 만들어 저장
//       filename: `%DATE%.error.log`,
//       maxFiles: 30,
//       zippedArchive: true,
//     }),
//   ],
// });

// // Production 환경이 아닌 경우(dev 등)
// // if (process.env.NODE_ENV !== "production") {
// //   logger.add(
// //     new winston.transports.Console({
// //       format: winston.format.combine(
// //         winston.format.colorize(), // 색깔 넣어서 출력
// //         winston.format.simple(), // `${info.level}: ${info.message} JSON.stringify({ ...rest })` 포맷으로 출력
// //       ),
// //     }),
// //   );
// // }
