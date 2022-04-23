export const filters = {
    byProps: (...mdls) => window.enmity.modules.filters.byProps(...mdls),
    byName: (name) => window.enmity.modules.filters.byName(name),
    byTypeName: (name) => window.enmity.modules.filters.byTypeName(name),
    byTypeString: (...strings) => window.enmity.modules.filters.byTypeString(...strings),
    byDefaultString: (...strings) => window.enmity.modules.filters.byDefaultString(...strings),
    byString: (...strings) => window.enmity.modules.filters.byString(...strings),
};
export function getModule(filter, options) {
    return window.enmity.modules.getModule(filter, options);
}
export function getModules(filter) {
    return window.enmity.modules.getModules(filter);
}
export function bulk(...filter) {
    return window.enmity.modules.bulk(...filter);
}
export function getByProps(...options) {
    return window.enmity.modules.getByProps(...options);
}
export function getByDisplayName(...options) {
    return window.enmity.modules.getByDisplayName(...options);
}
export function getByTypeName(...options) {
    return window.enmity.modules.getByTypeName(...options);
}
export function getByName(...options) {
    return window.enmity.modules.getByName(...options);
}
export function getByDefaultString(...options) {
    return window.enmity.modules.getByDefaultString(...options);
}
export function getByTypeString(...options) {
    return window.enmity.modules.getByTypeString(...options);
}
export function getByString(...options) {
    return window.enmity.modules.getByString(...options);
}
export function getByKeyword(...options) {
    return window.enmity.modules.getByKeyword(...options);
}
