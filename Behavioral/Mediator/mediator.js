var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Конкретные Посредники реализуют совместное поведение, координируя отдельные
 * компоненты.
 */
var ChatRoom = /** @class */ (function () {
    function ChatRoom(m1, m2, m3) {
        this.member1 = m1;
        this.member1.setMediator(this);
        this.member2 = m2;
        this.member2.setMediator(this);
        this.member3 = m3;
        this.member3.setMediator(this);
    }
    ChatRoom.prototype.sendMessage = function (receiver, sender, message) {
        if (message !== null) {
            console.log("Mediator received message for ".concat(receiver, " from ").concat(sender, ": ").concat(message));
        }
    };
    ChatRoom.prototype.notify = function (sender, message) {
        if (message !== null) {
            console.log("Mediator received message for everyone from ".concat(sender, ": ").concat(message));
        }
    };
    return ChatRoom;
}());
var Member = /** @class */ (function () {
    function Member(mediator) {
        this.mediator = mediator;
    }
    Member.prototype.setMediator = function (mediator) {
        this.mediator = mediator;
    };
    return Member;
}());
var Member1 = /** @class */ (function (_super) {
    __extends(Member1, _super);
    function Member1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nickname = 'Member1';
        return _this;
    }
    Member1.prototype.sendToAll = function () {
        this.mediator.notify(this.nickname, 'Hello everybody!');
    };
    Member1.prototype.sendToMember = function () {
        this.mediator.sendMessage('Member3', this.nickname, 'Hello Member3');
    };
    return Member1;
}(Member));
var Member2 = /** @class */ (function (_super) {
    __extends(Member2, _super);
    function Member2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nickname = 'Member2';
        return _this;
    }
    Member2.prototype.sendToAll = function () {
        this.mediator.notify(this.nickname, 'Hi everyone!');
    };
    Member2.prototype.sendToMember = function () {
        this.mediator.sendMessage('Member1', this.nickname, 'Hello Member1');
    };
    return Member2;
}(Member));
var Member3 = /** @class */ (function (_super) {
    __extends(Member3, _super);
    function Member3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nickname = 'Member3';
        return _this;
    }
    Member3.prototype.sendToAll = function () {
        this.mediator.notify(this.nickname, 'Sent to everyone from Member3');
    };
    Member3.prototype.sendToMember = function () {
        this.mediator.sendMessage('Member2', this.nickname, 'Hello Member2');
        this.mediator.sendMessage('Member1', this.nickname, 'Hello Member1');
    };
    return Member3;
}(Member));
var m1 = new Member1();
var m2 = new Member2();
var m3 = new Member3();
var mediator = new ChatRoom(m1, m2, m3);
m1.sendToAll();
m2.sendToAll();
m3.sendToMember();
