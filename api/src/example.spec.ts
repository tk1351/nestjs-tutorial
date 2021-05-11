class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.annouceFriendship(name);
  }

  annouceFriendship(name) {
    global.console.log(`${name} is now a friend!`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('Friendは見つかりません');
    }
    this.friends.splice(idx, 1);
  }
}

describe('FriendsList', () => {
  let friendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('friends listの初期化', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('friend list へ friendの追加', () => {
    friendsList.addFriend('Ariel');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('friendshipのアナウンス', () => {
    friendsList.annouceFriendship = jest.fn();
    expect(friendsList.annouceFriendship).not.toHaveBeenCalled();
    friendsList.addFriend('Ariel');
    expect(friendsList.annouceFriendship).toHaveBeenCalledWith('Ariel');
  });

  describe('removeFriend', () => {
    it('friendをリストから削除する', () => {
      friendsList.addFriend('Ariel');
      expect(friendsList.friends[0]).toEqual('Ariel');
      friendsList.removeFriend('Ariel');
      expect(friendsList.friends[0]).toBeUndefined();
    });
    it('friendが存在しないエラーをthrowする', () => {
      expect(() => friendsList.removeFriend('Ariel')).toThrow(
        new Error('Friendは見つかりません'),
      );
    });
  });
});
