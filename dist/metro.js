export const filters = {
    byProps: (...mdls) => window.enmity.modules.filters.byProps(...mdls),
    byName: (name) => window.enmity.modules.filters.byName(name),
    byTypeName: (name) => window.enmity.modules.filters.byTypeName(name),
    byDisplayName: (name) => window.enmity.modules.filters.byDisplayName(name),
};
export function getModule(filter, options) {
    return window.enmity.modules.getModule(filter, options);
}
export function getModules(filter) {
    return window.enmity.modules.getModules(filter);
}
export function bulk(...filters) {
    return window.enmity.modules.bulk(...filters);
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
export function getByKeyword(...options) {
    return window.enmity.modules.getByKeyword(...options);
}
