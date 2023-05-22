function fn_exchange_dataset(p_data) {
    let rates = p_data['rates'];
    console.log(rates);
    let datalist = Object.keys(rates);
    let countrylist = Object.keys(rates[datalist[0]]);
    console.log('datalist: ', datalist);
    console.log('countrylist: ', countrylist);
    let datasets = {};
    // 국가별로
    for(let i = 0; i < countrylist.length; i++) {
        let temp_labels = [];
        let temp_data = [];
        // 국가별 날짜 데이터 만큼
        for(let j = 0; j < datalist.length; j++) {
            temp_labels.push(datalist[j]);
            temp_data.push(rates[datalist[j]][countrylist[i]]);
        }
        datasets[countrylist[i]] = {'label' : countrylist[i] /*국가이름*/, 'labels' : temp_labels /*x축*/, 'data' : temp_data} /*y축*/
    }
    datasets['labels'] = datalist;
    console.log(datasets);
    return datasets;
}