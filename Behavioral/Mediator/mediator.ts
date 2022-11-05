interface Mediator {
    sendMessage(receiver: string, sender:string, message: string): void;
    notify(sender: string, event: string): void;
}

class ChatRoom implements Mediator {
    private member1: Member1;
    private member2: Member2;
    private member3: Member3;
    constructor(m1: Member1, m2: Member2, m3: Member3) {
        this.member1 = m1;
        this.member1.setMediator(this);
        this.member2 = m2;
        this.member2.setMediator(this);
        this.member3 = m3;
        this.member3.setMediator(this);
    }
    public sendMessage(receiver: string, sender:string, message: string): void {
        if (message !== null) {
            console.log(`Mediator received message for ${receiver} from ${sender}: ${message}`);
        }
    }
    public notify(sender: string, message: string): void {
        if (message !== null) {
            console.log(`Mediator received message for everyone from ${sender}: ${message}`);
        }
    }
}

abstract class Member {
    protected mediator: Mediator;
    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }
    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

class Member1 extends Member {
    private nickname = 'Member1';
    public sendToAll(): void {
        this.mediator.notify(this.nickname, 'Hello everybody!');
    }
    public sendToMember(): void {
        this.mediator.sendMessage('Member3', this.nickname, 'Hello Member3');
    }
}
class Member2 extends Member {
    private nickname = 'Member2';
    public sendToAll(): void {
        this.mediator.notify(this.nickname, 'Hi everyone!');
    }
    public sendToMember(): void {
        this.mediator.sendMessage('Member1', this.nickname, 'Hello Member1');
    }
}
class Member3 extends Member {
    private nickname = 'Member3';
    public sendToAll(): void {
        this.mediator.notify(this.nickname, 'Sent to everyone from Member3');
    }
    public sendToMember(): void {
        this.mediator.sendMessage('Member2', this.nickname, 'Hello Member2');
        this.mediator.sendMessage('Member1', this.nickname, 'Hello Member1');
    }
}

const m1 = new Member1();
const m2 = new Member2();
const m3 = new Member3();
const mediator = new ChatRoom(m1, m2, m3);

m1.sendToAll();
m2.sendToAll();
m3.sendToMember();