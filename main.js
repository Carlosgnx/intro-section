// Menu Functions
function alternator(classname, modifier, indicatorHide = '', indicatorShowing = '', action = '', actionTarget = '') {
    let element = document.getElementsByClassName(classname)[0]
    let target = document.getElementsByClassName(actionTarget)
    [0]
    let indicatorShow = document.getElementsByClassName(indicatorShowing)[0]
    let indicator = document.getElementsByClassName(indicatorHide)[0]

    if (element.classList.contains(modifier)) {
        element.classList.remove(modifier)
        if (action && actionTarget != '') {
            target.classList.remove(action)
        }
        if (indicatorHide && indicatorShowing && action != '') {
            indicatorShow.classList.remove(action)
            indicator.classList.add(action)
        }
    } else {
        element.classList.add(modifier)
        if (action && actionTarget != '') {
            target.classList.add(action)
        }
        if (indicatorHide && indicatorShowing && action != '') {
            indicatorShow.classList.add(action)
            indicator.classList.remove(action)
        }
    }
}
