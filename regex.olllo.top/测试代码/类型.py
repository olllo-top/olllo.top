'''
分类：
基本：基本无需配置
内容：需要配置内容
参数：需要配置参数
组合：


class Pattern(JoinX): 组合
    """
    This class is used to join sub patterns. The sub patterns
    can be instances of Group, Repeat, str, etc. 
    the only constraint it is not possible to pass instances of Any
    otherwise it would cause ambiguity in the raw regex string.
    """

class Any(RegexOperator):  组合
    """
    The regex |.  或
    Usage:
        any = Any('abc', 'efg')
        print(any.mkregex())
    Output:
        'abc|efg'
    """

class MetaB(RegexMeta): 基本
    """
    The regex \B. 非单词边界
    Usage:
        pattern = Pattern(MetaB(), 'bar')
        print(pattern.mkregex())
    Output:
        \Bbar
    """

class Metab(RegexMeta): 基本
    """
    The regex \b. 单词边界
    Usage:
        pattern = Pattern(Metab(), 'bar')
        print(pattern.mkregex())
    Output:
        \bbar
    """

class Caret(RegexOperator): 内容
    """
    The regex ^. 开头
    Usage:
        pattern = Pattern(Caret(), 'bar')
        print(pattern.mkregex())
    Output:
        ^bar
    """

class Dollar(RegexOperator):
    """
    The regex $. 结尾
    Usage:
        pattern = Pattern('foobar', Dollar())
        print(pattern.mkregex())
    Output:
        foobar$
    """

class NonCapture(JoinX):
    """
    The regex:  非捕获分组
        (:abc)
    Usage:
        group = NonCapture('foo')
        pattern = Pattern(group, 'bar')
        print(pattern.mkregex())
    Output:
        (?:foo)bar
    """

class Word(RegexOperator): 基本
    """
    The \w metacharacter.  单词(字母，数字，下划线)
    Usage:
        repeat = Repeat(Word(), 1)
        pattern = Pattern(':', repeat)
        print(pattern.mkregex())
    Output:
        :\w{1,}
    """

class NotWord(RegexOperator): 基本
    """
    The \W metacharacter. 非单词
    Usage:
        repeat = Repeat(NotWord(), 1)
        pattern = Pattern(':', repeat)
        print(pattern.mkregex())
    Output:
        :\W{1,}
    """

class Group(JoinX): 组合
    """
    A regex group like:  分组
        (abc)
    usage:
        group = Group('abc')
        pattern = Pattern(group, X(), group)
        print(pattern.mkregex())
    Output:
        (abc).\1
    Notice that the first reference to the group it serializes
    to the regex group construct but the second one serializes to 
    the group reference.
    """

class NamedGroup(Group): 组合
    """
    Named groups.
    Usage:
        group = NamedGroup('gname', 'abc', X(), 'efg')
        pattern  = Pattern(group, 'ijl')
        print(pattern)
    Output:
        (?P<gname>abc.efg)ijl
    
    """

class Repeat(RegexOperator): 内容
    """
    The regex a{min, max)} 重复
    Usage:
        repeat = Repeat('a', 1)
        print(repeat)
    Output:
        a{1,}
    """

class ZeroOrMore(Repeat): 内容
    """
    The regex op +. It works alike Repeat. 重复0个或多个
    """

class OneOrMore(Repeat): 内容
    """
    The regex op *. It works alike Repeat. 重复一个或多个
    """

class OneOrZero(Repeat): 内容
    """
    The regex op ?. 0个或一个
    """

class ConsumeNext(RegexOperator):
    """
    Lookbehind assertion.
    
    (?<=...) or (?<...) based on neg argument.
    """

class ConsumeBack(ConsumeNext):
    """
    The regex lookahead assertion.
        (?=foo)bar
    """

class Seq(RegexOperator): 参数
    """
    Map to a sequence like a-z, A-Z, 0-9 etc.  序列，a-z，A-Z，0-9
    It can only be used with Include or Exclude.
    """

class Include(RegexOperator): 内容
    """
    Sets.  包含，里面是或的关系？a或b或c？
    [abc]
    """

class Exclude(Include): 内容
    """
    Excluding. 不包含
    [^abc]
    """

class X(RegexOperator): 基本
    """
    The dot. 任意字符
    .

'''