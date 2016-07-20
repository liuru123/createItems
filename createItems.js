/**
 * Created by liuru on 16-7-19.
 */
'use strict'

let cartItems=[
    {
        barcode:"99922",
        name:   "可口可乐",
        unit:    "瓶",
        price:   3.00
    },
    {
        barcode:"99922",
        name:    "可口可乐",
        unit:    "瓶",
        price:    3.00
    },
    {
        barcode:"99912",
        name:    "雪碧",
        unit:     "瓶",
        price:     3.50
    },
    {
        barcode:"99901",
        name:    "饼干",
        unit:    "袋",
        price:   5.90
    }
];
function computeCount(cartItems)
{
    let result=[];
    for(let i=0;i<cartItems.length;i++) {
        let existItem = result.find(function (item) {
            return item.barcode === cartItems[i].barcode;
        });
        if (existItem) {
            existItem.count++;
        }
        else
        {
            result.push(Object.assign({}, cartItems[i], {count: 1}));
        }
    }
    return result;
}

function computeSubtotal(Items)
{
    let result=[];
    for(let i=0;i<Items.length;i++)
    {
        result.push(Object.assign({},Items[i],{subtotal: Items[i].price*Items[i].count}));
    }
    return result;
}

function computeTotal(mergeTotal)
{
    let sum=0;
    for(let i=0;i<mergeTotal.length;i++)
    {
        sum += mergeTotal[i].subtotal;
    }
    return sum;
}

function printReceipt(cartItems)
{
    let Items = computeCount(cartItems);
    let mergeTotal = computeSubtotal(Items);
    let total = computeTotal(mergeTotal);
    print(mergeTotal,total);
}


function print(mergeTotal,total)
{
    let result = "";
    console.log("不赚钱商店");
    for(let i=0;i<mergeTotal.length;i++)
    {
        console.log( "名称：" + mergeTotal[i].name+"," +"数量："+mergeTotal[i].count+mergeTotal[i].unit+","+"单价："+mergeTotal[i].price+","+"小计："+mergeTotal[i].subtotal);
    }
    console.log("总计:"+ total);
}

printReceipt(cartItems);