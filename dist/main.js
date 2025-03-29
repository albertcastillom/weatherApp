/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// key=Q5J5VVK74FADGKEMEB3S6PNGP\nconst weatherDiv = document.querySelector(\".weather\");\n\nlet processData = function(data){\n let object = {\n    city: data.resolvedAddress,\n    temp: data.currentConditions.temp,\n    conditions: data.currentConditions.conditions,\n    precip: data.currentConditions.precip,\n }\n return object;\n}\n\nasync function getWeather(location){\n    try {\n        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=Q5J5VVK74FADGKEMEB3S6PNGP`, {mode: 'cors'});\n        const weatherData =  await response.json();\n        console.log(weatherData);\n        console.log(processData(weatherData));\n    } catch(err){\n        console.log(err);\n    }\n}\n\nconst form = document.querySelector(\"#addy\");\nform.addEventListener(\"submit\", (event)=>{\n    event.preventDefault();\n    const street = document.getElementById('street').value;\n    const city = document.getElementById('city').value;\n    const state = document.getElementById('state').value;\n    const zip = document.getElementById('zip').value;\n    getWeather(`Address: ${street}, ${city}, ${state}, ${zip}`);\n\n});\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRIQUE0SCxTQUFTLGtDQUFrQyxhQUFhO0FBQ3BMO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTyxJQUFJLEtBQUssSUFBSSxNQUFNLElBQUksSUFBSTs7QUFFN0QsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGtleT1RNUo1VlZLNzRGQURHS0VNRUIzUzZQTkdQXG5jb25zdCB3ZWF0aGVyRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyXCIpO1xuXG5sZXQgcHJvY2Vzc0RhdGEgPSBmdW5jdGlvbihkYXRhKXtcbiBsZXQgb2JqZWN0ID0ge1xuICAgIGNpdHk6IGRhdGEucmVzb2x2ZWRBZGRyZXNzLFxuICAgIHRlbXA6IGRhdGEuY3VycmVudENvbmRpdGlvbnMudGVtcCxcbiAgICBjb25kaXRpb25zOiBkYXRhLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnMsXG4gICAgcHJlY2lwOiBkYXRhLmN1cnJlbnRDb25kaXRpb25zLnByZWNpcCxcbiB9XG4gcmV0dXJuIG9iamVjdDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbil7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHtsb2NhdGlvbn0/a2V5PVE1SjVWVks3NEZBREdLRU1FQjNTNlBOR1BgLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9jZXNzRGF0YSh3ZWF0aGVyRGF0YSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZHlcIik7XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KT0+e1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3Qgc3RyZWV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0cmVldCcpLnZhbHVlO1xuICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eScpLnZhbHVlO1xuICAgIGNvbnN0IHN0YXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXRlJykudmFsdWU7XG4gICAgY29uc3QgemlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ppcCcpLnZhbHVlO1xuICAgIGdldFdlYXRoZXIoYEFkZHJlc3M6ICR7c3RyZWV0fSwgJHtjaXR5fSwgJHtzdGF0ZX0sICR7emlwfWApO1xuXG59KTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;