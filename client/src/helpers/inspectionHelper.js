/**
 * Get grade status text by grade number
 * 
 * @param {string} grade The grade number
 * @returns {string} gradeStatus The grade status text
 */
const getGradeStatus = (grade) => {
  let gradeStatus = '';

  switch (grade) {
    case '5':
      gradeStatus = 'Completely broken or missing';
      break;
    case '4':
      gradeStatus = 'Barely works... but works';
      break;
    case '3':
      gradeStatus = 'Good enough';
      break;
    case '2':
      gradeStatus = 'Still looks like new';
      break;
    case '1':
      gradeStatus = 'Perfect... probably new?';
      break;
    default:
      gradeStatus = 'Probably missing';
      break;
  }

  return gradeStatus;
};

/**
 * Get grade colour by grade number
 * 
 * @param {string} grade The grade number
 * @returns {string} gradeColour The grade colour
 */
const getGradeColour = (grade) => {
  let gradeColour = '';

  switch (grade) {
    case '5':
      gradeColour = 'error';
      break;
    case '4':
      gradeColour = 'warning';
      break;
    case '3':
      gradeColour = 'info';
      break;
    case '2':
      gradeColour = 'success';
      break;
    case '1':
      gradeColour = 'success';
      break;
    default:
      gradeColour = 'default';
      break;
  }

  return gradeColour;
};

/**
 * Check is turbine is broken
 * 
 * @param {Array} components List of all components from inspection
 * @returns Returns true if some component had grade '5' or false if components have grades less than '5'
 */
const isTurbineBroken = (components) => {
  const inspectionGrades = components.map(component => component.grade.type);
  return inspectionGrades.includes('5');
};

export {
  getGradeStatus,
  getGradeColour,
  isTurbineBroken,
}