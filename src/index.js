/**
 * @author YDG
 */

/**
 * @class
 * @property {number} id                       - 아이디(required)
 * @property {string} content                  - 내용(required)
 * @property {boolean} isCompleted                  - 완료여부(required)
 * @property {string} category                 - 카테고리(required)
 * @property {Tag} [tags]     - 태그들(optional)
 */
class Todo {}

/**
 * @class
 * @property {number} id - 아이디
 * @property {string} value - 태그명
 */

class Tag {}

/**
 * 할 일 생성
 * @param {string} content -내용
 * @param {boolean} isCompleted -완료여부
 * @param {string} category -카테고리
 * @param {string} [tags] -태그들
 * @returns {object}
 */
const createTodo = (content, isCompleted, category, tags) => {};

/**
 * 모든 할 일 가져온기
 * @returns {object}
 */
const getAllTodo = () => {};

/**
 * 특정 할 일 가져오기
 * @param {number} id
 * @returns {object}
 */
const getByIdTodo = (id) => {};

/**
 * 할 일 업데이트
 * @param {number} id -아이디
 * @param {string} content -내용
 * @param {boolean} isCompleted -완료여부
 * @param {string} category -카테고리
 * @param {Tag} [tags] -태그
 * @returns {object}
 */
const updateTodo = (id, content, isCompleted, category, tags) => {};

/**
 * @function
 * @param {number} id -아이디
 * @returns {object}
 */
const deleteTodo = (id) => {};

/**
 * 모든 할 일 리스트 삭제
 * @returns {object}
 */
const clearTodo = () => {
  todos = [];
};
