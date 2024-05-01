$(document).ready(function () {
    const tabsContainer = $('#tabs');
    const tabContentContainer = $('#tab-content');
    const addTabButton = $('#add-tab');

    let tabCount = 1;


    function createTab() {

        const tabId = `tab-${tabCount}`;
        const tabContentId = `tab-content-${tabCount}`;

        const tab = $(`<div class="tab" id="${tabId}">Tab ${tabCount}<span class="close">x</span></div>`);

        const tabContent = $(`<div class="tab-content" id="${tabContentId}"><div class="input-container"><input class="input-url" type="text" placeholder="Enter URL"></div><div class="iframe-container"><iframe class="iframe"></iframe></div></div>`);

        tab.on('click', function () {
            tabsContainer.addClass('tabs')
            $('.tab-content').removeClass('active');
            $(`#${tabContentId}`).addClass('active');
            $('.tab').removeClass('active');
            $(this).addClass('active');
        });

        tab.find('.close').on('click', function (e) {
            e.stopPropagation(); 
            const prevTab = tab.prev(); 
            tab.remove();
            $(`#${tabContentId}`).remove();
            if ($('#tabs').children().length == 0) {
                tabsContainer.removeClass('tabs');
            }
            if (prevTab.length) {
                prevTab.click()
                console.log()
            }
        });
        

        tabContent.find('.input-url').on('keypress', function (e) {
            if (e.which === 13) {
                const url = $(this).val();
                $(`#${tabContentId} .iframe`).attr('src', url);
            }
        });

        tabsContainer.append(tab);
        tabContentContainer.append(tabContent);
        tabCount++;
        tab.click()
    }

    addTabButton.on('click', createTab);
});
