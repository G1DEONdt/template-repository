const folder = [];
export let selectedProject = 0;

export function getSelectedProject () {
    return folder[selectedProject];
}

export function getSelectedProjectIndex() {
    return selectedProject;
}

export function setSelectedProject (index) {
    selectedProject = index;
}

export function addToFolder(project) {
    folder.push(project);
}

export function getFolder() {
    return folder;
}

export function removeFromFolder(project) {
    folder.splice(project, 1);
}