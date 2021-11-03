var app = new Vue({
    el: '#app',
    data: {
        items: [
            {
                url:'https://picsum.photos/id/10/400/250',
                text: this.title,
                title: '이어폰',
                price: 30000,
                sale: 20,
                unit1: '(원)',
                unit2: '%',
                count: 10
            },
            {
                url:'https://picsum.photos/id/20/400/250',
                text: this.title,
                title: '케이스',
                price: 15000,
                sale: 20,
                unit1: '(원)',
                unit2: '%',
                count: 50
            },
            {
                url:'https://picsum.photos/id/30/400/250',
                text: this.title,
                title: '지문방지필름',
                price: 10000,
                sale: 20,
                unit1: '(원)',
                unit2: '%',
                count: 30
            },
            {
                url:'https://picsum.photos/id/40/400/250',
                text: this.title,
                title: '태블릿거치대',
                price: 12000,
                sale: 10,
                unit1: '(원)',
                unit2: '%',
                count: 20
            },
            {
                url:'https://picsum.photos/id/10/400/250',
                text: this.title,
                title: '충전기',
                price: 15000,
                sale: 10,
                unit1: '(원)',
                unit2: '%',
                count: 10
            },
            {
                url:'https://picsum.photos/id/20/400/250',
                text: this.title,
                title: '터치펜',
                price: 10000,
                sale: 100,
                unit1: '(원)',
                unit2: '%',
                count: 20
            },
            {
                url:'https://picsum.photos/id/30/400/250',
                text: this.title,
                title: '전자파 차단필름',
                price: 50000,
                sale: 10,
                unit1: '(원)',
                unit2: '%',
                count: 100
            },
            {
                url:'https://picsum.photos/id/40/400/250',
                text: this.title,
                title: '칫솔',
                price: 2000,
                sale: 0,
                unit1: '(원)',
                unit2: '%',
                count: 1000
            }
        ]
    },
    methods : {
        buyItem: function(){
            alert("구매페이지로 이동합니다.");
            // 실제 db에서 반영해야 하지만, 다른 view로 라우팅하면 됨(a.k.a 맵핑)
        },
        cartItem: function(idx){ 
            alert("장바구니에 추가합니다.");
            // 실제 db에서 반영해야 하지만, vue에서는 배열/오브젝트에서 Vue.set, Vue.delete 할 수 있음
            this.$set(this.items[idx], this.items[idx].count, this.items[idx].count--);
        }
    }
});